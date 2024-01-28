import {useState, createContext, useEffect} from 'react';
import {auth, db, storage} from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false);
    const navigate = useNavigate();

    async function signIn(email,password){
        setLoadingAuth(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (value) =>{
                let uid = value.user.uid;
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);

                let data = {
                    uid:uid,
                    nome: docSnap.data().nome,
                    email: value.user.email,
                    avatarUrl: docSnap.data().avatarUrl
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success("Bem-vindo(a) de volta!");
                navigate("/dashboard");
            })
            .catch((error) =>{
                console.log(error);
                setLoadingAuth(false);
                toast.error("Usuário ou senha inválidos.");
            });
    }

    //cadastrar novo usuario
    async function signUp(name, email, password){
       setLoadingAuth(true);
       await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value) =>{
            let uid = value.user.uid;

            await setDoc(doc(db, "users", uid), {
                nome: name,
                avatarUrl: null
            })
            .then(() =>{
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email,
                    avatarUrl: null
                }

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success("Seja Bem-vindo ao Sistema!");
                navigate("/dashboard");
            })
        })
        .catch((error) =>{
            console.log(error);
            setLoadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('@tickesPro', JSON.stringify(data));
    }

    return(
        <AuthContext.Provider
            value={{
                signed: !!user, //false
                user,
                signIn, 
                signUp,
                loadingAuth
            }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;