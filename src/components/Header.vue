<template>
    <header id="header">
        <div class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="header_logo">
                        <div class="logo">
                            <a href="#"><img src="../assets/img/logo.png" class="logo_img" alt=""></a>
                        </div>
                    </div>
                    <div class="contact_us">
                        <div class="contact_us_link">
                            <a href="#">ОБРАТИТЬСЯ В НАТ</a>
                        </div>

                    </div>
                    <div class="social_links">
                        <div class="social_links_i">
                            <a href="#">
                                <i class="fab fa-facebook-f">
                                </i>
                            </a>
                        </div>
                        <div class="social_links_i">
                            <a href="#">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                        <div class="social_links_i">
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class="social_links_i">
                            <a href="#">
                                <i class="fab fa-telegram"></i>
                            </a>
                        </div>
                    </div>
                    <div class="search_panel">
                        <div class="search_in">
                            <input type="text" placeholder="Поиск">
                            <button class="search_btn">Найти</button>
                        </div>
                    </div>
                    <div class="menu">
                        <div class="" @click="openDrawer = !openDrawer">
                            <a href="#" class="side_menu"><i class="far fa-bars"></i></a>
                        </div>
                    </div>
                    <div class="menu_right"
                         :style="openDrawer ? 'width: 25%; padding: 37px 85px 37px 70px;' : 'width: 0; opacity: 0; pointer-events:none;'">
                        <div class="icon_close" style="cursor: pointer" @click="openDrawer = !openDrawer">
                            <span><i class="fal fa-times"></i></span>
                        </div>
                        <ul class="navigation_menu">
                            <li class="nav_menu_item">
                                <a href="#" class="nav_menu_item_link">
                                    Главная
                                </a>
                            </li>
                            <li :class="expandedList === 'about' ? 'nav_menu_item active' : 'nav_menu_item'">
                                <a class="nav_menu_item_link" @click="expandedList = expandedList !== 'about' ? 'about' : ''">
                                    Об ассоциации <i class="fas fa-chevron-down down"></i>
                                </a>
                                <ul class="sub_menu">
                                    <li class="sub_menu_item_sublink"><a href="#">История</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Устав</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Правление</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Технологический комитет</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Символика</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Наша деятельность</a></li>
                                </ul>
                            </li>
                            <li class="nav_menu_item">
                                <a href="#" class="nav_menu_item_link">
                                    Новости
                                </a>
                            </li>
                            <li class="nav_menu_item">
                                <a href="#" class="nav_menu_item_link">
                                    Календарь мероприятий
                                </a>
                            </li>
                            <li :class="expandedList === 'mer' ? 'nav_menu_item active' : 'nav_menu_item'">
                                <a class="nav_menu_item_link" @click="expandedList = expandedList !== 'mer' ? 'mer' : ''">
                                    Мероприятия НАТ <i class="fas fa-chevron-down down"></i>
                                </a>
                                <ul class="sub_menu">
                                    <li class="sub_menu_item_sublink"><a href="#">Академия НАТ </a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Международный конгресс НАТ </a>
                                    </li>
                                    <li class="sub_menu_item_sublink"><a href="#">Премия имени Владимира
                                        Зворыкина </a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Технологический комитет</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Золотой луч</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Герой нашего времени </a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Включайся! </a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Первый шаг</a></li>
                                </ul>
                            </li>
                            <li :class="expandedList === 'ass' ? 'nav_menu_item active' : 'nav_menu_item'">
                                <a href="#" class="nav_menu_item_link" @click="expandedList = expandedList !== 'ass' ? 'ass' : ''">
                                    Вступить в ассоциацию <i class="fas fa-chevron-down down"></i></a>
                                <ul class="sub_menu">
                                    <li class="sub_menu_item_sublink"><a href="#">Общая информация </a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Что дает</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Как вступить</a></li>
                                    <li class="sub_menu_item_sublink"><a href="#">Положение о членских взносах</a></li>
                                </ul>

                            </li>
                            <li class="nav_menu_item">
                                <a class="nav_menu_item_link">
                                    Партнеры
                                </a>
                            </li>
                            <li class="nav_menu_item">
                                <a class="nav_menu_item_link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: [],
        data() {
            return {
                openDrawer: false,
                expandedList: "",
            }
        },
    }
</script>

<style scoped>

</style>