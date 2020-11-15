const robot = document.querySelector('.robot')

function moveRobot() {
    robot.style.left = '150px';
    if(robot.style.left === '150px'){
        function bottomRobot() {
            robot.style.bottom = '250px';

            if(robot.style.bottom === '250px') {
                function topRobot() {
                    robot.style.top = '0px'
                    robot.style.left = '0px';
                }
                robot.addEventListener('click', topRobot)
            }
        }
        robot.addEventListener('click', bottomRobot)
    }
}


robot.addEventListener('click', moveRobot)

