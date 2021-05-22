import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ImageUpload = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data =>{
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            wight: data.wight,
            price: data.price,
            date: new Date()
        }
        const url = `https://afternoon-springs-18240.herokuapp.com/addEvent`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server site', res))

        // console.log(eventData)
        };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '1bf08180c23279a630dc47837daa74b5')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });        
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                Product Name : <input  placeholder="Enter name" {...register("name")} /><br/>
                Wight : <input  placeholder="Enter Wight" {...register("wight")} /><br/>
                Add Price : <input placeholder="Enter Price" {...register("price")} /><br/>

                Add Photo : <input type="file" {...register("exampleRequired")} onChange={handleImageUpload} /><br/>

                <input type="submit" />
            </form>
        </div>
    );
};

export default ImageUpload;