
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseGameName, chooseGameGenre, chooseGameRating, chooseGameImage } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    event.preventDefault()
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseGameName(data.game_name));
      dispatch(chooseGameGenre(data.game_genre));
      dispatch(chooseGameRating(data.game_rating));
      dispatch(chooseGameImage(data.game_image));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="game_name">Game Name</label>
          <Input {...register('game_name')} name='game_name' placeholder="Game Name" />
        </div>
        <div>
          <label htmlFor="game_genre">Game Genre</label>
          <Input {...register('game_genre')} name='game_genre' placeholder="Game Genre" />
        </div>
        <div>
          <label htmlFor="game_rating">Game Rating</label>
          <Input {...register('game_rating')} name='game_rating' placeholder="Game Rating" />
        </div>
        <div>
          <label htmlFor="game_image">Game Image</label>
          <Input {...register('game_image')} name='game_image' placeholder="Game Image (Insert URL)" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm