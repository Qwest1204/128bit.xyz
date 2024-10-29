import React from "react";
import Abstract from "../img/abstracty.png"

class Intresting extends React.Component {
    render() {
        return (
        <div class="container px-4 py-5" id="icon-grid"> 
            <h2 class="pb-2 border-bottom">Мои интересы/навыки</h2> 
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"> 
            <div class="col d-flex align-items-start"> 
                <div> 
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Deep learning (DL)</h3> 
                <p>Глубокое обучение основывается на нейронных сетях с большим количеством слоев, что позволяет моделировать сложные паттерны в данных, таких как распознавание изображений и речи.</p> 
                </div> 
            </div> 
            <div class="col d-flex align-items-start"> 
        
                <div> 
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Machine learning (ML)</h3> 
                <p>Машинное обучение позволяет компьютерным системам обучаться на данных и делать предсказания или решения без четко запрограммированных инструкций.</p> 
                </div> 
            </div> 
            <div class="col d-flex align-items-start"> 
        
                <div> 
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Reinforcement learning (RL)</h3> 
                <p>Обучение с подкреплением использует награды и наказания для обучения агентов оптимальной стратегии, подобно дрессировке животных.</p> 
                </div> 
            </div> 
            <div class="col d-flex align-items-start"> 
                    <div> 
                    <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Pytorch</h3> 
                    <p>PyTorch стал одним из самых популярных фреймворков для глубокого обучения благодаря своей простоте и гибкости.</p> 
                    </div> 
            </div> 
            <div class="col d-flex align-items-start"> 
            
                    <div> 
                    <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Docker</h3> 
                    <p>Docker позволяет упаковывать приложения и их зависимости в контейнеры, что облегчает их переносимость и развертывание в различных средах.</p> 
                    </div> 
            </div> 
            <div class="col d-flex align-items-start"> 
            
                    <div> 
                    <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">CI/CD</h3> 
                    <p> Система CI/CD позволяет разработчикам автоматически тестировать и развертывать код, ускоряя выпуск новых версий программного обеспечения.</p> 
                    </div> 
            </div> 
            <div class="col d-flex align-items-start"> 
            
                    <div> 
                    <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">GitHub</h3> 
                    <p>GitHub является самой большой в мире платформой для совместной разработки программного обеспечения, предлагая инструменты для хостинга репозиториев, управления версиями и командной работы.</p> 
                    </div> 
            </div> 
            <div class="col d-flex align-items-start"> 
            
                    <div> 
                    <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Linux</h3> 
                    <p>Linux используется в большинстве суперкомпьютеров мира благодаря своей гибкости и надежности.</p> 
                    </div> 
            </div> 
            </div> 
        </div> 
        )
    }
}

export default Intresting