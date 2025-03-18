import btnBack from './back.svg'

const BtnBack = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={btnBack} alt="" />
      Back
    </a>
  )
}

export default BtnBack
