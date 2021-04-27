import React, { useContext, useState } from 'react'
import axios from 'axios'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Card from '@material-ui/core/Card';
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { StoreG } from '../Store/Store'

const schema = yup.object().shape({
    login: yup.string().required('Login kiritishda xatolik mavjud').min(4),
    password: yup.string().required('Password kiritishda xatolik mavjud').min(4),
});

const Exit = () => {

    const [loader, setLoader] = useState(false)

    let history = useHistory()

    const { obj } = useContext(StoreG)
    console.log(obj)

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        // console.log(data)
        setLoader(true)
        axios.post('https://jsonplaceholder.typicode.com/posts', { data })
            .then((res) => {
                console.log(res)
                history.push('/Buyurtmalar')
                history.go()
                setLoader(false)
            })
            .catch((error) => {
                console.error(error)
                setLoader(false)
            })
    }
    return (
        <div className="container-login">
            <Card className="container-login-card">
                {loader ? (<Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={30}
                    width={30}
                    timeout={3000} //3 secs
                />) : null}
                <div className="login">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Admin</h2>
                        <input
                            label="Login"
                            type="text"
                            name="login"
                            placeholder="login..."
                            ref={register}
                        />
                        <p>{errors.login?.message}</p>

                        <input
                            type="password"
                            label="Password"
                            name="password"
                            placeholder="password..."
                            ref={register}
                        />
                        <p>{errors.password?.message}</p>

                        <Button
                            type="submit"
                            className="btn-auth"
                            variant="contained"
                            color="primary"
                        // onClick={()=>history.push('/Buyurtmalar')}
                        >
                            Kirish
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default Exit
