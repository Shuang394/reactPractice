import '../Styles/BulletPoints.css'

export default function BulletPoint({ Uuid, removeFunction}){

    return(
        <div className = "bulletDiv">
            <p className = "bulletPoint">&#8226;</p>
            <textarea className = "bulletPara" placeholder = "Describe your experience and contributions"></textarea>
            <button className = "removeBullet" onClick = {() => {
                removeFunction(Uuid);
            }}>-</button>
        </div>
    )

}