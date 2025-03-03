import { useEffect, useState } from "react";
import "./EditPost.css"
import { getCategories } from "../../http/categoryApi";
import { ChangeCategories } from "../../store/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../http/postsApi";
import { useNavigate, useParams } from "react-router-dom";
import { MY_POSTS_ROUTE } from "../../utils/constants";


export function EditPost(){

    const [text,setText] = useState("")
    const [title,setTitle] = useState("")
    const {Categories} = useSelector(state => state.Category);
    const [ClickCategory,setClickCategory] = useState(Categories[0] ? Categories[0] : {});
    const dispatch = useDispatch()
    const {id} = useParams();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
    }

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }


    useEffect(() => {
            try {
                getCategories().then(data => dispatch(ChangeCategories(data)))
            }
            catch(error){
                alert(error.response.data.message) 
            }
    },[]);

    async function clickEdit()
    {
        try{
            updatePost({id:id,title:title,text:text,category_id:ClickCategory.id}).then(data => alert(data.message))
            await timeout(500);
            navigate(MY_POSTS_ROUTE)
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
        
    }

    return(
        <div className="cartEmpty">
             <div className="Main">  	
			<div className="edit">
				<form onSubmit = {handleSubmit} >
					<h2>Редактирование поста</h2>
                    
                    {Categories.length > 0  && ClickCategory.name &&
                        <select  value={ClickCategory.name} onChange={(e) => setClickCategory(Categories.filter((obj) => obj.name === e.target.value)[0])}>
                            {Categories.map((category) => <option>{category.name}</option>)}
                        </select>
                    }

                   

					<input value={text} onChange={ e => setText(e.target.value)}  type="text" name="text" placeholder="Текст" required=""/>
                    <input value={title} onChange={ e => setTitle(e.target.value)}  type="text" name="title" placeholder="Заголовок" required=""/>
					<button type = "submit" onClick={() => clickEdit()} >Обновить</button>
				</form>
			</div>
	    </div>
    </div>
    )
}