import { useDispatch } from "react-redux"
import { ChangeModalViewOpen } from "../../store/consReducer"
import "./ModalV.css"

export function ModalView({text}){

    const dispatch = useDispatch()


    return(
        <div className="overlay" >
            <div className="modal" >
                <p>{text}</p>
                <button onClick={() => dispatch(ChangeModalViewOpen())} className="Button">Вернуться назад</button>
            </div>
        </div>)
}