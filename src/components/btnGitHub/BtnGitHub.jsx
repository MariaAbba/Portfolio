import gitHub from './gitHub-black.svg'

const BtnGitHub = ({link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHub} alt='gitHubLogo'/>
      Website Link
    </a>
  )
}

export default BtnGitHub
