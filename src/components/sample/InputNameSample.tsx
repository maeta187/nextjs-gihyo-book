// NOTE:動作確認ファイルのため今後削除する可能性あり
import { useForm, SubmitHandler } from 'react-hook-form'

type MyFromData = {
  fistName: string
  lastName: string
  category: string
}

export default function InputNameSample() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MyFromData>()
  const onSubmit: SubmitHandler<MyFromData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('fistName', { required: true })} placeholder='名前' />
      {errors.fistName && <div>名前を入力してください</div>}
      <input {...register('lastName', { required: true })} placeholder='名字' />
      {errors.lastName && <div>名字を入力してください</div>}
      <select {...register('category', { required: true })}>
        <option value=''>選択</option>
        <option value='A'>カテゴリA</option>
        <option value='B'>カテゴリB</option>
      </select>
      {errors.category && <div>カテゴリを選択してください。</div>}
      <input type='submit' />
    </form>
  )
}
