
function Navbar(){
     return(
<div class="navbar">
<div class="navbar__s1">
    <h1 class="navbar__s1__title">Udemy</h1>
</div>
<div class="navbar__s2">
    <i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
    <input class="navbar__s2__input" placeholder="Search for anything here Tech,bussiness,art,etc..."></input>
</div>
<div class="navbar__s3">
    <p>Treanding course</p>
    <div class="mylearning">
        <p>My Learning</p>
        <div class="mylearning__popup">
            <p>You did't Purchase anything!</p>
        </div>
    </div>
    <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
    <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
    <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
</div>
<div class="menu__bar">
    <i class="fa-solid fa-bars"></i>
</div>
</div>
     )
}


export default Navbar