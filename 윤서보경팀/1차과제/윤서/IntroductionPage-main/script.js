document.addEventListener("DOMContentLoaded", function(){ //브라우저에서 HTML 문서가 완전히 로드되었을 때 실행되는 이벤트
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const mainLink = document.querySelector('.nav-link[href="#main"]'); //main section을 자동으로 active 상태가 되도록 네비게이션 링크를 #main으로
    if(mainLink){
        mainLink.classList.add("active");
        mainLink.style.color = "blue";
        
        const mainSection = document.querySelector("#main");
        if(mainSection){
            window.scrollTo({ //페이지가 로드될 때 main 섹션으로 부드럽게 스크롤할수 있게 behavior:'smooth'임
                top: mainSection.offsetTop -70,
                behavior:'smooth'
            });
        }
    }
    window.addEventListener("scroll", function(){ //스크롤 이벤트가 발생할 때마다 호출, 사용자가 스크롤을 할 때마다 현재 보이는 섹션을 감지하고, 해당 섹션에 맞는 네비게이션 링크에 active 클래스를 추가 또는 제거함
        let currentSection=""; //현재 스크롤 위치에서 표시되는 섹션의 id 값을 저장할 변수

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollY = window.pageYOffset; //현재 스크롤 위치를 계산
 
            if(scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight){ //재 스크롤 위치가 해당 섹션의 범위 내에 있는지 확인하는 조건문
                currentSection = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            link.style.color = "grey";
        });
        if(currentSection){
            const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
            if(activeLink){
                activeLink.classList.add("active");
                activeLink.style.color = "blue";
            }
        }
    });
    navLinks.forEach(function(link){
        link.addEventListener("click", function(){ //모든 네비게이션 링크에 클릭 시, 실행
            navLinks.forEach((nav) => {
                nav.classList.remove("active");
                nav.style.color = "grey";
            });
            this.classList.add("active");
            this.style.color = "blue";
        });
    });
});