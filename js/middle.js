const insertMiddleSection = () => {
    const middleSection = document.getElementById('middle-section');
    middleSection.innerHTML = `
       <div class="card">
       <i class="fas fa-truck"></i>
            <h4>Free Shiping</h4>
            <p>Order More Than $100</p>
        </div>
        <div class="card">
        <i class="fas fa-unlock-alt"></i>
            <h4>Secure Payment</h4>
            <p>%100 Secure Payment</p>
        </div>
        <div class="card">
        <i class="fa-solid fa-headset"></i>
            <h4>24/7 Support</h4>
            <p>Call us anytime</p>
        </div>`;
};

function addStylesheet() {
    const style = document.createElement('style');
    style.innerHTML = `
    @import url("https://fonts.googleapis.com/css2?family=Montagu+Slab:wght@500&family=Montserrat:wght@400;500;600&display=swap");

    #middle-section {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        background: #f6f6f6;
    }

    .card {
        width: 180px;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        row-gap: 10px;
    }
    
    .card h4 {
       font-family: "Montagu Slab", serif;
       font-weight: 500;
       font-size: 17px; 
    }

    .card i {
        font-size: 30px;
        color: #4261d5;
    }

    .card p {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        color: #979797;
    }
    
    .formSubs {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
            height: 300px
            padding: 20px;
            background: transparent;
        }

        .formSubs h5 {
            font-family: "Montagu Slab", serif;
            font-size: 20px;
            margin-bottom: 20px;
            color: #fff;
            text-align: center;
        }

        .formSubs input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            box-sizing: border-box;
        }

        .formSubs input[type="button"] {
            width: 100%;
            padding: 10px 0;
            border: none;
            border-radius: 4px;
            background-color: #3f5dcd;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .formSubs input[type="button"]:hover {
            background-color: #3654b3;
        }

        .formSubs input[type="email"]:focus,
        .formSubs input[type="button"]:focus {
            outline: none;
            box-shadow: 0 0 5px rgba(66, 97, 213, 0.5);
        }
    `;
    document.head.appendChild(style);
}

const insertSubscribe = () => {
    const subscribeForm = document.getElementById('subscribe');
    subscribeForm.innerHTML = `
         <div class="formSubs">
            <h5>Subscribe To Receive The Latest Updates</h5>
            <input type="email" name="email" id="email" placeholder="Enter your email">
            <input type="button" value="Subscribe" id="subscribeBtn">
         </div>
    `;
};


insertMiddleSection();
addStylesheet();
insertSubscribe();