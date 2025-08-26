const GeneralInfo = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Телефон: {data.phone}</p>
      <p>Дата регистрации: {data.joined}</p>
    </div>
  )
}
export default GeneralInfo
