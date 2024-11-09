import t1 from "../assets/Image/t1.png"

function Menubar(){
    return (
    <><div class="navbar__1">
            <div class="navbar__1__menu__1">Deparment</div>
            <div class="navbar__1__menu__1">Bussiness</div>
            <div class="navbar__1__menu__1">Course Sections</div>
            <div class="navbar__1__menu__1">IT & Software</div>
            <div class="navbar__1__menu__1">Personal Development</div>
            <div class="navbar__1__menu__1">Design</div>
        </div><div class="title__image">
                <img src={t1} alt="title image"></img>
                <div class="offer-box__container">
                    <h1>Udemy flash sale!!!</h1>
                    <p>Get the top Course for Just at 499/-
                        Get one time learn
                        life time
                    </p>
                </div>
            </div></>

    )
}
export default Menubar