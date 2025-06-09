import React, {useState} from "react";
import styles from './InTouch.module.scss'
import {useForm} from 'react-hook-form'
import axios from "axios";
import { register } from "module";

interface Form {
    FIO: string;
    tel: number | string;
    email: string;
    comment: string;
}


const InTouch: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},

    } = useForm<Form>();

    const onSubmit = async (data: Form) => {

    try {
        const response = await axios.post('vvdvv', data);
        console.log("Response from server: ", data)
        reset();

    } catch(error){
        console.error("error while sending: ", error)
    }
        console.log('data has been send: ', data);
        reset();
    };



    return (
        <div className={styles.loyerup}>
            <div className={styles.container}>
                <div className={styles.sentence}>
                    <p className={styles.upper}>
                        Необходимо связаться с Вами?
                    </p>
                    <p className={styles.low}>
                    Оставьте свои контакты
                    </p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.f_group}>
                        <input type="text" name="FIO" placeholder="Фамилия и имя" {...register("FIO", {required : 'Enter name: '})}/>
                        {errors.FIO && <span className={styles.error}>{errors.FIO.message}</span>}
                        <input type="tel" name="tel" placeholder="Номер телефона" {...register("tel", {required: "enter a phone number: "})}/>
                        {errors.tel && <span className={styles.error}>{errors.tel.message}</span>}
                        <input type="email" name="email" placeholder="Эл. почта " {...register("email", {required: "enter a email address: ",
                             pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Неверный email"
                            }
                        })}/>
                        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                        <textarea name="comment" placeholder="Комментарий: Свяжитесь со мной" {...register("comment")}/> 
                    </div> <div className={styles.send_btn}> 
                            <button>Send</button> 
                    </div>
                </form>
            </div>
        </div>
    )

}
export default InTouch;

