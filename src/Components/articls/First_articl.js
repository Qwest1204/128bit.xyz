import React from "react";
import Header from "../Header";
import Futer from "../Fouter";

class Napolnenie extends React.Component {
    render() {
        return (
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold text-body-emphasis">Wellcome to AI </h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Искусственный интеллект стремительно развивается, перекраивая мир вокруг нас. От автономных автомобилей до систем распознавания речи, ИИ уже оказывает значительное влияние на нашу жизнь.</p>
                    <p class="lead mb-4">Я создал этот сайт, чтобы поделиться своими знаниями и опытом в этой области, а также помочь вам:</p>
                    <p class="lead mb-4">• Углубиться в мир ML и узнать о его различных аспектах.</p>
                    <p class="lead mb-4">• Понять сложные концепции ML, DL и бэкэнд разработки с помощью простых и доступных объяснений.</p>
                    <p class="lead mb-4">• Получить практические советы по реализации и применению ИИ-технологий.</p>
                    <p class="lead mb-4">• Обсудить актуальные вопросы и поделиться своими идеями в комментариях.</p>
                </div>
            </div>
        )
    }
}

class First_art extends React.Component {
    render() {
        return (
            <div>
            <Header/>
            <Napolnenie/>
            <Futer />
            </div>
        )
    }
}



export default First_art