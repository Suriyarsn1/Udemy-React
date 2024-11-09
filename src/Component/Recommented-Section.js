import C1 from "../assets/Image/c1.jpg"
import C2 from "../assets/Image/c2.jpg"
import C3 from "../assets/Image/c3.jpg"
import C4 from "../assets/Image/c4.jpg"
function Recommented(){
 return(
    <div class="recommed__section">
    <h1 class="recommed__title">Recommended For You </h1>
    <p>Pick The Best fit</p>
    <div class="recommed__container">
        <div class="course__card">
            <img src={C1} alt="card image"></img>
            <h3 class="card__title">2023 Python Visuvalisation Materclass</h3>
            <p>Cole steele</p>
            <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
            <p>1449 <del>2000</del></p>
            <div class="course-card__button">
                <button class="course-card__button1">AddCart</button>
                <button class="course-card__button2">BuyNow</button>
            </div>
        </div>
        <div class="course__card">
            <img src={C2} alt="card image"></img>
            <h3 class="card__title">2023 Python Visuvalisation Materclass</h3>
            <p>Cole steele</p>
            <p>3.2 ⭐ ⭐ </p>
            <p>1449 <del>2000</del></p>
            <div class="course-card__button">
                <button class="course-card__button1">AddCart</button>
                <button class="course-card__button2">BuyNow</button>
            </div>
        </div>
        <div class="course__card">
            <img src={C3} alt="card image"></img>
            <h3 class="card__title">2023 Python Visuvalisation Materclass</h3>
            <p>Cole steele</p>
            <p>3.8 ⭐ ⭐ ⭐</p>
            <p>1449 <del>2000</del></p>
            <div class="course-card__button">
                <button class="course-card__button1">AddCart</button>
                <button class="course-card__button2">BuyNow</button>
            </div>
        </div>
        <div class="course__card">
            <img src={C4} alt="card image"></img>
            <h3 class="card__title">2023 Python Visuvalisation Materclass</h3>
            <p>Cole steele</p>
            <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
            <p>1449 <del>2000</del></p>
            <div class="course-card__button">
                <button class="course-card__button1">AddCart</button>
                <button class="course-card__button2">BuyNow</button>
            </div>
        </div>
    </div>
</div>
 )
}
export default Recommented