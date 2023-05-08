import React from 'react'
import {useForm} from 'react-hook-form'
import "./AddProduct.css";
import "./AddProduct.css";

export const AddProduct = () => {
  
    const {register, handleSubmit} =  useForm()

    const submit = (data) =>{
        console.log(data)   
    }

    const provideSubCategory =(mainCategory)=>{
        if(mainCategory === 'fashion')
        {
            document.getElementById('fashion').style.display='block'
        }
        else if(mainCategory === 'electronics')
        {
            // alert('hiii')
            document.getElementById('electronics').style.display='block'
        }
    }

    return (
    <div>
        <h2>
            AddProduct
        </h2>
    <form onSubmit={handleSubmit(submit)}>
        
        <div class="form-group">
            <label for="exampleInputPassword1">Product Name</label>
            <input type="text" {...register('pname')} />
        </div>

        <div>
            CATEGORY : <select {...register('cat')} onChange= {(e)=>{provideSubCategory(e.target.value)}} >
                <option value="select">SELECT</option>
                <option value="fashion">FASHION</option>
                <option value="electronics">ELECTRONICS</option>
            </select>
        </div>

        <div id='electronics' style={{display:'none'}}>
            Accessories
            <br/>
            CHARGER<input type='checkbox' name="e-cat"/><br/>
            COVER<input type='checkbox' name="e-cat"/><br/>
            TUFFEN<input type='checkbox' name="e-cat"/><br/>
            
        </div>
        
        <div id="fashion" style={{display:'none'}}>
        Accessories
            <br/>
            COVER<input type='checkbox' name="e-cat"/><br/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    
    </form>
    </div>

  )
}
