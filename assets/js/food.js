document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    const eatBtns = document.querySelectorAll(".eat-button");

    eatBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
          const id = e.target.getAttribute("data-id");
    
          fetch(`api/burgers/${id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(goodEatsState),
          }).then((response) => {
            if (response.ok) {
              console.log(`Burger ${id} logged as eaten.`);
              location.reload();
            } else {
              alert(
                "Something seems to be wrong."
              );
            }
          });
        });
      });
    
      const createBurgerBtn = document.getElementById("create-form");
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const newBurger = {
          name: document.getElementById("burgerName").value.trim(),
          burgerName: document.getElementById("burgerName").checked,
        };
  
     
        fetch('/api/burgers', {
          method: "POST",
          headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
          },
          body: JSON.stringify(newBurger),
        }).then(() => {
         
          document.getElementById("burgerName").value = "";
  
          console.log("Created A Burger!");
          location.reload();
        });
      });
    }
  

    const deleteBurgerBtns = document.querySelectorAll(".eaten-burger");
  
    
    deleteBurgerBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
  
        fetch(`/api/burgers/${id}`, {
          method: "DELETE",
        }).then((res) => {
          console.log(res);
          console.log(`Deleted burger: ${id}`);
  
          // Reload the page
          location.reload();
        });
      });
    });
  });
