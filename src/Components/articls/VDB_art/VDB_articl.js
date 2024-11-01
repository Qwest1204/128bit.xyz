import React from "react";
import Header from "../../Header";
import Futer from "../../Fouter";
import VDB_img from "./img/e27f706a07f4650ae521f7e6e89d9cf4.jpeg"

import MainImport from "./img/imports_code.png"
import Setup from "./img/setup.png"
import Connect_postgres from "./img/connect_postgres.png"

class Napolnenie extends React.Component {
    render() {
        return (
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold text-body-emphasis">Векторные базы данных</h1>
                <div class="col-lg-6 mx-auto">
                    <h2 class="pb-2 border-bottom">кратко про VDB</h2>
                    <p class="lead mb-4">Векторная база данных - это специализированный тип базы данных, который хранит данные в виде многомерных векторов, каждый из которых представляет определенные характеристики или качества. Эти векторы могут иметь различное количество измерений, в зависимости от сложности данных (в одном случае это может быть несколько измерений, а в другом тысячи). Для преобразования данных, включая текст, изображения, аудио и видео, в эти векторы используются различные методы, например, модели машинного обучения или извлечение признаков. Основное преимущество векторной базы данных заключается в ее способности эффективно и точно извлекать данные на основе близости или сходства векторов. Это позволяет выполнять поиски на основе семантической и контекстуальной значимости, а не только полагаться на точные совпадения или заранее определенные критерии, как в традиционных базах данных.</p>
                    <h2 class="pb-2 border-bottom">Эмбеддинги</h2>
                    <p class="lead mb-4">Искусственный интеллект и машинное обучение произвели революцию в представлении неструктурированных данных с использованием эмбеддингов. Это массивы чисел, которые содержат семантическое значение объектов данных. Например, цвета в системе RGB представлены числами, указывающими их красную, зеленую и синюю составляющие. Однако представление более сложных данных, таких как слова или текст, в значимые числовые последовательности является сложной задачей. Именно здесь вступают в игру модели машинного обучения. Модели машинного обучения могут представлять смысл слов в виде векторов, изучая отношения между словами в векторном пространстве. Эти модели часто называют моделями эмбеддингов или векторизаторами.</p>
                    <div class="container col-xxl-12 px-4 py-5">
                        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div class="col-10 col-sm-8 col-lg-6">
                            <img src={VDB_img} class="d-block mx-lg-auto img-fluid" alt="Источник изображения: A Gentle Introduction to Vector Databases | Weaviate — vector database" width="700" height="500" loading="lazy"/>
                        </div>
                        <div class="col-lg-6">
                            <p class="lead mb-4">Эмбеддинги кодируют семантическое значение объектов относительно друг друга. Похожие объекты группируются близко в векторном пространстве, что означает, что чем ближе два объекта, тем больше они похожи. Например, рассмотрим векторы слов. В этом случае слова, такие как "Волк" и "Собака", находятся близко друг к другу, потому что собаки являются потомками волков. "Кошка" также похожа, потому что она имеет сходство с "Собакой", поскольку обе являются животными и распространенными домашними питомцами. С другой стороны, слова, представляющие фрукты, такие как "Яблоко" и "Банан", находятся дальше от терминов, относящихся к животным, формируя</p>
                        </div>
                        </div>
                    </div>
                    <h2 class="pb-2 border-bottom">Векторный поиск</h2>
                    <p class="lead mb-4">Эмбеддинги позволяют нам выполнять векторный поиск, поиск по сходству или семантический поиск, находя и извлекая схожие объекты в векторной базе данных. Эти процессы включают в себя поиск объектов, находящихся близко друг к другу в векторном пространстве. Точно так же, как мы можем найти схожие векторы для определенного объекта (например, собаки), мы также можем найти схожие векторы для поискового запроса. Например, чтобы найти слова, похожие на слово "Котенок", мы генерируем векторное вложение для "Котенка" и извлекаем все элементы, близкие к вектору запроса, такие как слово "Кошка". Числовое представление объектов данных дает нам возможность применять математические операции, такие как расчет расстояния между двумя векторными вложениями, для определения их сходства. Это делает векторные вложения мощным инструментом для поиска и сравнения объектов данных на основе их семантического значения.</p>
                    <h2 class="pb-2 border-bottom">А теперь практика</h2>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={Setup} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={Connect_postgres} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                    <img src={MainImport} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>

                </div>
            </div>
        )
    }
}

class VDB extends React.Component {
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



export default VDB