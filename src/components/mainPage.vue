<template>
    <Header/>
    <div id="slider">
        <div class="slider">
            <div ref="carousel"
                 style="width: 100%; height: 700px; overflow: hidden; scroll-snap-type: x mandatory;scroll-behavior: smooth;">
                <ul class="slider_wrap">
                    <li>
                        <div class="slider_img">
                            <div class="slider_text">
                                <h3>
                                    <a>МЕЖДУНАРОДНЫЙ КОНГРЕСС НАТ</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis
                                    dolorem
                                    error, ipsa maiores minus nam neque nisi odit quisquam quos repudiandae temporibus
                                    totam
                                    ullam voluptas? Commodi necessitatibus quasi repudiandae?</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="slider_img">
                            <div class="slider_text">
                                <h3>
                                    <a>МЕЖДУНАРОДНЫЙ КОНГРЕСС НАТ</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis
                                    dolorem
                                    error, ipsa maiores minus nam neque nisi odit quisquam quos repudiandae temporibus
                                    totam
                                    ullam voluptas? Commodi necessitatibus quasi repudiandae?</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="slider_nav">
                <div class="slider_nav_icon">
                    <div class="slider_nav_icon_item next" @click="scrollCarousel(1)">
                        <div class="icon_btn">
                            <i class="far fa-angle-right" style="font-size: 25px;font-weight: bold"></i></div>
                    </div>
                    <div class="slider_nav_icon_item prev" @click="scrollCarousel(-1)">
                        <div class="icon_btn"><i class="far fa-angle-left"
                                                 style="font-size: 25px;font-weight: bold"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="small_slider">
        <div class="small_slider">
            <div class="container">
                <div class="row py-5">
                    <div class="col-lg-12 py-4">
                        <div class="wrapper_heading ">
                            <h2>
                                Главные новости
                            </h2>
                        </div>
                        <div class="news_btn ">
                            <div class="news_nav prev_new d-inline" @click="scrollNewsCarousel(-1)">
                                <i class="fas fa-angle-left"></i>
                            </div>
                            <div class="news_nav next_new d-inline" @click="scrollNewsCarousel(1)">
                                <i class="fas fa-angle-right"></i>
                            </div>

                        </div>
                    </div>

                    <div class="small_slider_wrap"
                         ref="news_carousel" style="width: 100%;
                         overflow: hidden; scroll-behavior: smooth;">
                        <div class="wrapper">
                            <div class="wrapper_card">
                                <div class="card_img">
                                    <img src="../assets/img/news.jpg" alt="">
                                </div>
                                <div class="card_text mb-3">
                                    <div class="card_text_link ">
                                        <p>Обращение Президента НАТ Э.Сагалаева к руководителю Роскомнадзора
                                            А.Липову</p>
                                    </div>
                                </div>
                                <div class="card_date">
                                    21.01.2021
                                </div>
                            </div>
                            <div class="wrapper_card">
                                <div class="card_img">
                                    <img src="../assets/img/news.jpg" alt="">
                                </div>
                                <div class="card_text mb-3">
                                    <div class="card_text_link ">
                                        <p>Обращение Президента НАТ Э.Сагалаева к руководителю Роскомнадзора
                                            А.Липову</p>
                                    </div>
                                </div>
                                <div class="card_date">
                                    21.01.2021
                                </div>


                            </div>
                            <div class="wrapper_card">
                                <div class="card_img">
                                    <img src="../assets/img/news.jpg" alt="">
                                </div>
                                <div class="card_text mb-3">
                                    <div class="card_text_link ">
                                        <p>Обращение Президента НАТ Э.Сагалаева к руководителю Роскомнадзора
                                            А.Липову</p>
                                    </div>
                                </div>
                                <div class="card_date">
                                    21.01.2021
                                </div>


                            </div>
                            <div class="wrapper_card">
                                <div class="card_img">
                                    <img src="../assets/img/news.jpg" alt="">
                                </div>
                                <div class="card_text mb-3">
                                    <div class="card_text_link ">
                                        <p>Обращение Президента НАТ Э.Сагалаева к руководителю Роскомнадзора
                                            А.Липову</p>
                                    </div>
                                </div>
                                <div class="card_date">
                                    21.01.2021
                                </div>


                            </div>
                            <div class="wrapper_card">
                                <div class="card_img">
                                    <img src="../assets/img/news.jpg" alt="">
                                </div>
                                <div class="card_text mb-3">
                                    <div class="card_text_link ">
                                        <p>Обращение Президента НАТ Э.Сагалаева к руководителю Роскомнадзора
                                            А.Липову</p>
                                    </div>
                                </div>
                                <div class="card_date">
                                    21.01.2021
                                </div>


                            </div>
                            <div class="wrapper_card">
                                <div class="card_img">
                                    <img src="../assets/img/news.jpg" alt="">
                                </div>
                                <div class="card_text mb-3">
                                    <div class="card_text_link ">
                                        <p>Обращение Президента НАТ Э.Сагалаева к руководителю Роскомнадзора
                                            А.Липову</p>
                                    </div>
                                </div>
                                <div class="card_date">
                                    21.01.2021
                                </div>


                            </div>
                            <div class="wrapper_card">
                                <div class="card_img">
                                    <img src="../assets/img/news.jpg" alt="">
                                </div>
                                <div class="card_text mb-3">
                                    <div class="card_text_link ">
                                        <p>Обращение Президента НАТ Э.Сагалаева к руководителю Роскомнадзора
                                            А.Липову</p>
                                    </div>
                                </div>
                                <div class="card_date">
                                    21.01.2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="competition">
        <div class="competition">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 py-4">
                        <div class="competition_heading">
                            <h3>
                                Главные новости
                            </h3>
                        </div>
                        <div class="competition_link">
                            <div class="competition_link_text">
                                Все мероприятия
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 py-5">
                        <div class="competition_img text-lg-left text-center">
                            <img src="../assets/img/hero.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7 align-self-center">
                        <div class="competition_s_t">
                            <div class="competition_s_heading">
                                <h4>ГЕРОЙ НАШЕГО ВРЕМЕНИ</h4>
                            </div>
                            <div class="competition_s_text">
                                <p>
                                    Апрель 2021 / Смоленск
                                    Ежегодный фестиваль социально значимых телепрограмм и телефильмов: творческий
                                    конкурс, мастер-классы признанных мастеров жанра публицистической журналистики,
                                    режиссеров, продюсеров. Основной задачей фестиваля является привлечение внимания
                                    телевизионных и производящих компаний к созданию программ и фильмов, связанных с
                                    подлинными человеческими ценностями. Начав в 2007 году свой путь в Москве, фестиваль
                                    прошел в Самаре, Твери, Туле, Ростове-на-Дону, Уфе, Астрахани, Пензе, Ижевске,
                                    Санкт-Петербурге, Калуге и продолжает «путешествовать» по России. Ежегодно участие в
                                    фестивале принимают федеральные и региональные телекомпании, производящие компании,
                                    продюсерские центры, журналисты и режиссеры. Для многих начинающих авторов Фестиваль
                                    является своеобразной школой повышения мастерства.</p>
                            </div>
                            <div class="competition_s_btn">
                                <a class="btn_link">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="ourwork">
        <div class="ourwork">
            <div class="container">
                <div class="row">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from "./Header";

    export default {
        name: 'filmPage',
        components: {Header},
        data() {
            return {}
        },

        methods: {
            scrollCarousel(dir) {
                this.$refs.carousel.scrollBy({left: this.$refs.carousel.offsetWidth * dir});
            },
            scrollNewsCarousel(dir) {
                this.$refs.news_carousel.scrollBy({left: this.$refs.news_carousel.offsetWidth * dir});

            },


        }
    }
</script>

<style scoped>


</style>
