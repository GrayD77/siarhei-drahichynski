import React, {FC} from 'react';
import './MainPage.css';
import LazyImg from "../LazyImg/LazyImg";

const MainPage: FC = () => {
    return (
        <div className={'app-wrap'}>
            <section>
                <p>Привет, я Сергей</p>

                <LazyImg
                    src={'/img/ideal.webp'}
                    placeholder={'/img/ideal-placeholder.webp'}
                    alt={'Ideal developer with cute kitty on his shoulder'}
                    width={760}
                    height={570}
                />
            </section>

            <section>
                <h1>Коротенько...</h1>

                <p>
                    Я фронтенд разработчик из Минска. Мне 32 и я занимаюсь разработкой 5&nbsp;лет.
                    Окончил БНТУ по инженерной специальности.
                </p>

                <p>Использую JS, HTML, CSS. Последние 3 года специализируюсь на React.js</p>

                <p>Мне нравится писать стильный код и хитрые алгоритмы, создавать анимацию и красивые интерфейсы.</p>
            </section>

            <section>
                <h1>Про опыт...</h1>
                <p className={'sub-header'}><small>2016 - {new Date().getFullYear()}</small></p>

                <p>
                    <b>Первый</b> коммерческий опыт, на самом деле, был раньше - в 2015.
                    Тогда мне подвернулась работа по разработке сайта <a rel='noreferrer noopener' target={'_blank'} href="http://zoomitworks.com">zoomitworks.com</a>.
                    <br />
                    Пришлось повозиться, чтобы сделать верстку адаптивной и сохранить полноэкранный скролл.
                    А поведение меню навигации в мобильной версии до сих пор греет душу 🙃
                </p>

                <p>
                    <b>IMAGURU</b> 2016-2017 - наверное лучший вариант для первой работы. Каждую неделю новый проект и полная свобода действий в выборе технологий.
                    В небольшой команде, кроме основных ресурсов imaguru.by и bel.biz, разрабатывали сайты для ивентов - от хакатонов до довольно крупных событий.
                    Тут мы с дизайнером очень сошлись характерами - он любил рисовать что-нибудь эдакое, а я это программировать. Можно сказать, что это была моя роль в команде.
                    <a rel='noreferrer noopener' target={'_blank'} href="http://imaguru.siarhei-drahichynski.by"> Вот несколько примеров сохранившихся работ</a>
                </p>

                <p>
                    <b>OnTravelSolutions (Resliv)</b> 2017-2021 - тут, в прекрасной команде, я вырос и состоялся как специалист.
                    Мы переписывали легаси-код, внедряли React, учились скраму, строили роадмапы и срывали сроки.
                    А самое главное, что было у кого поучиться и набраться опыта, а позже еще им и поделиться.
                    Кроме того, выполнял функции мейнтейнера и проводил собеседования
                </p>
            </section>
        </div>
    );
};

export default MainPage;