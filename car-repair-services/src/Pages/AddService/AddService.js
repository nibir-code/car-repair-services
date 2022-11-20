import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";


const AddService = () => {
     const { register, handleSubmit,reset } = useForm();
     const onSubmit = data => {

          console.log(data);
          
          axios.post('http://localhost:5000/services', data)
             .then(res =>{
               if(res.data.insertedId){
                    alert('added successfully');
                    reset();

               }
             })

     }

               
          
     return (
          <div className="add-service">
                    <h1>Add services</h1>
               
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name"/>
                    
                    <textarea {...register("description")} placeholder="description"/>
                    
                    <input type="number" {...register("price")} placeholder="number"/>
                    
                    <input {...register("img")} placeholder="image url" />
                    
                    <input type="submit" />
                    
               </form>
               
          </div>
     );
};

export default AddService;