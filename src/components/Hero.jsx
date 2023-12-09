import HeroBg from '../../public/assets/herobg.png';
import TelegramIcon from '../../public/assets/telegram-icon.svg';
const Hero = () => {
    return (
        <div className="  pb-8">
            <div className="container relative">
                <div className="flex">

                    <div className="pt-14 max-w-[658px]">
                        <h1 className="text-textColor font-bold text-5xl mb-5">
                            Объявления о продаже автомобилей со всех площадок в одном месте
                        </h1>

                        <p className="text-textColor max-w-[425px] mb-14">
                            Самый быстрый агрегатор объявлений о продаже автомобилей со всех популярных сайтов в России
                        </p>

                        <div className="pl-5">
                            <div className="bg-white rounded-2xl max-w-[468px] z-20 relative pl-6 pb-3 pr-6 pt-9 flex justify-between">
                                <p className="py-2 px-5 rounded-lg absolute -top-5 -left-5 text-xs bg-blue-100 inline-block">Подписка в телеграм
                                </p>
                                <ul className=" pl-6 space-y-1 text-xs">
                                    <li className="list-disc">
                                        Мгновенные оповещения об объявлениях
                                    </li>
                                    <li className="list-disc">
                                        Безлимитное кол-во проверок авто по VIN
                                    </li>
                                    <li className="list-disc">
                                        Добавление объявлений в отслеживаемые
                                    </li>
                                </ul>

                                <div className="items-end flex">
                                    <a href="https://t.me/mirodildev/" className=" bg-brndcolor text-xs text-white py-3 px-6 rounded-lg flex items-center">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM4.01788 5.45038C3.41683 5.7128 2.79927 5.98244 2.23456 6.29349L2.23452 6.29354C1.93965 6.50942 2.3316 6.66213 2.69926 6.80537C2.75772 6.82814 2.81555 6.85068 2.86992 6.87319C2.91516 6.88709 2.96117 6.90175 3.0078 6.9166C3.41671 7.04688 3.87269 7.19215 4.26967 6.97362C4.92181 6.59901 5.53725 6.1659 6.15221 5.73312C6.35369 5.59133 6.55512 5.44957 6.75777 5.30992C6.76726 5.30385 6.77798 5.2969 6.78969 5.28931C6.96233 5.1774 7.35059 4.92573 7.20698 5.27251C6.86736 5.64391 6.5036 5.97268 6.13786 6.30324C5.89137 6.52602 5.64399 6.74961 5.40248 6.98761C5.19214 7.15851 4.97373 7.5022 5.20926 7.74151C5.75172 8.12128 6.30267 8.49183 6.85329 8.86216C7.03248 8.98268 7.21164 9.10318 7.39046 9.22396C7.69351 9.46592 8.16713 9.27021 8.23376 8.89212C8.26339 8.71821 8.29313 8.5443 8.32288 8.37038C8.48728 7.4092 8.65173 6.44768 8.79701 5.48337C8.81675 5.33211 8.83913 5.18085 8.86153 5.02952C8.9158 4.66274 8.97015 4.29552 8.98711 3.92677C8.94336 3.55878 8.49718 3.63969 8.24886 3.72244C6.97256 4.20809 5.70901 4.72974 4.45046 5.26059C4.30789 5.32375 4.16337 5.38685 4.01788 5.45038Z" fill="white" />
                                        </svg>
                                        Перейти
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='bg-white relative z-20 p-7 rounded-2xl shadow-lg' >
                        <h3 className='text-2xl font-bold text-textColor mb-5'>Профиль</h3>
                        <div className='mb-5'>
                            <button className='text-xs py-3 px-6 rounded-lg bg-[#E8F1FF] mr-6'>Вход</button>
                            <button className='text-xs py-3 px-6 rounded-lg bg-[#E8F1FF]'>Регистрация</button>
                        </div>

                        <form className='space-y-2.5 mb-8' action="">
                            <input type="text" className='rounded-lg w-full border-gray-300 border py-3 px-4' placeholder='Логин' />
                            <input type="password" className='rounded-lg w-full border-gray-300 border py-3 px-4' placeholder='Пароль' />
                            <button className='bg-brndcolor text-white rounded-lg w-full py-3'>Войти</button>
                        </form>

                        <div className='p-5 rounded-lg bg-[#E8F1FF] flex justify-around items-center'>
                            <p>
                                Чтобы зарегистрироваться - напишите любое сообщение нашему боту
                                <a className='font-bold hover:text-violet-900' href="https://t.me/developer_mirodil/"> @auto_online_bot,</a> <br />
                                в ответ он отправит вам данные для входа.
                            </p>
                            <img src={TelegramIcon} alt="Telegram icon" />
                        </div>
                    </div>
                </div>
                <img src={HeroBg} className='absolute h-[500px] select-none w-full top-0 rounded-lg max-w-[800px]  shadow-gray-400  z-10 right-0' alt="Bg" />
            </div>
        </div>
    )
}

export default Hero