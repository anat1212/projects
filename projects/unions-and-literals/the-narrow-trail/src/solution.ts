export function runCommands(): boolean {
    let state: "Water" | "Food" | "" = "";
	let food: number = 5;
    let water: number = 5;
    let day: number = 0;

    while (day < 8) {
        if (food == 0 || water == 0) {
            return false
        }
        let dice: number = Math.floor(Math.random() * 6) + 1;
        day += 1
        

        switch(dice) {
            case 1:
                food -= 1;
                water -= 1;
                state = "Food"
                break;
            case 2:
                food -= 1;
                water -= 1;
                state = "Water"
                break;
            case 3:
                if (state == "") {
                    state = "Water"
                } else if (state == "Water") {
                    water += 3
                    state = ""
                } else if (state == "Food") {
                    food += 3;
                    state = "";
                }
                food -= 1;
                water -= 1;
                break;
            case 4:
                if (state == "") {
                    state = "Food"
                } else if (state == "Water") {
                    water += 4
                    state = ""
                } else if (state == "Food") {
                    food += 4;
                    state = "";
                }
                food -= 1;
                water -= 1;
                break;
            case 5:
                if (state == "") {
                    state = "Water"
                } else if (state == "Water") {
                    water += 5
                    state = ""
                } else if (state == "Food") {
                    food += 5;
                    state = "";
                }
                food -= 1;
                water -= 1;
                break;
            case 6:
                if (state == "") {
                    state = "Food"
                } else if (state == "Water") {
                    water += 6
                    state = ""
                } else if (state == "Food") {
                    food += 6;
                    state = "";
                }
                food -= 1;
                water -= 1;
                break;
        }
    } 
    return true
    
}

runCommands()
