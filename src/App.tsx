import logo from './logo.svg';
import './styles/main.scss';
import telegram from './assets/svg/telegram.svg';
import vk from './assets/svg/vk.svg';
import youtube from './assets/svg/youtube.svg';

function App() {
  const socialMedia = ['telegram', 'vk', 'youtube'];

  const socialMediaIconSrc: { [index: string]: any } = {
    telegram,
    vk,
    youtube,
  };

  const socialMediaLink: { [index: string]: any } = {
    telegram: 'https://t.me/djirvu',
    vk: 'https://vk.ru/djirvu',
    youtube: 'https://www.youtube.com/@djirvu',
  };

  return (
    <div className="app">
      <header className="app_header">
        <img src={logo} className="app_logo" alt="Джинсы Рвутся логотип" />
        <h1 className="app_header--title">
          Панк-кор группа из Санкт-Петербурга
        </h1>
        <div className="social_media">
          {socialMedia.map((item) => (
            <a
              key={item}
              className="social_media--link"
              href={socialMediaLink[item]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialMediaIconSrc[item]}
                alt={`${socialMediaIconSrc[item]} icon `}
                className={'social_media--icon'}
              />
            </a>
          ))}
        </div>
      </header>
      <div className="app--bg" />
    </div>
  );
}

export default App;
