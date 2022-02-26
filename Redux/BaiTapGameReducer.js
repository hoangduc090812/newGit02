

const xucXacState= {
    banChon : true,
    soBanThang: 0,
    tongBanThang:0,

    mangXucXac:[
        {hinhAnh:'./imgGameXucXac/1.png', diem: 0},
        {hinhAnh:'./imgGameXucXac/1.png', diem: 0},
        {hinhAnh:'./imgGameXucXac/1.png', diem: 0}
    ]
}

export const BaiTapGameReducer = (state= xucXacState, action) =>{
    switch (action.type) {
        case "CHON_LUA":{
            state.banChon= action.chon;
            return {...state};
        }
        case "PLAYGAME":{
            let mangXX = [];
            let tongDiem = 0;
            for(let i = 0; i < 3; i++){
                let snn = Math.floor(Math.random() * 6) + 1;
                let mangNN = {hinhAnh:`./imgGameXucXac/${snn}.png`, diem: snn};
                mangXX.push(mangNN);
                tongDiem += snn;
            }
            state.mangXucXac = mangXX;
            if((tongDiem > 11 && state.banChon)||(tongDiem <= 11 && !state.banChon)){
                state.soBanThang += 1;
            }
            state.tongBanThang += 1;
            return {...state};
        } 
        default: return state;
            
    }
}