import { useState } from "react";
import {useCookies} from'react-cookie';
import axios from "axios";
import '../styles/EditProfil.css'

import {useNavigate} from 'react-router-dom';





const EditProfil = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        about: "",
        matches: []

    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:5000/user', {formData})
            console.log(response)
            const success = response.status === 200
            console.log(success);
            if (success) navigate('/homepage')
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }


    const handleModif = (e) => {
   
        }



    return (
        <>
            

            <div className="onboarding">
                <h2 className="create-account">Modifier</h2>
             
                <form onSubmit={handleSubmit}>
                    <section>
                     
                  

                    

                        <label htmlFor="about">A propos de moi</label>
                        <textarea className="descriptionss"
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="Passions , Hobbies  ... "
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <input onClick={handleModif} className="modif-submif" type="submit"/>
                    </section>

                    <section>

                        <label htmlFor="url">Photo Profile</label>
                        <input className="picture-modif"
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                        </div>


                    </section>

                </form>
            </div>






        </>

    )
}

export default EditProfil;