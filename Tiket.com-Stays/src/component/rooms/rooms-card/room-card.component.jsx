import React from 'react';

import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router-dom";

import {
    faStar,
    faStarHalf,
    faBowlFood,
    faWifi,
    faSwimmer ,
    faCalendarDays,
    faParking,
    faDoorClosed,
    faBellConcierge,
    faAirFreshener,
    // faAirConditions,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './room-card.style.scss'

export const RoomsCard = () => {

    const cardRoomData = [
        {
            id : uuidv4(),
            name : 'The Langham Jakarta',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/0d3a6d24-d647-4fc1-9a38-7c999e578a76-1640663715305-ebc35e8365762d8dcc47cf80cf9eb112.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/ac249483-47e7-4e1f-bd75-7b06d0e190a7-1640663715239-70c614981d1d8959172a3c12da9a4e84.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/37ff6b24-c690-4c3c-b363-2f55776d2749-1640664152460-45c974af48bd58072f4f238c1fffdceb.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/3b6638c4-d45d-47e0-a9bc-fb6f65954c81-1640663715244-2d83e46151f099a6c6b4d6f2955d3c21.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/120facca-021f-431a-8b98-3456009b478b-1640663715311-4b044c91a1704b5261804c5849d35401.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/988af30a-face-43e2-9e35-7e6ec512613f-1640664151222-d65a4817a68d76bfd5b74c5edb876091.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/bd323627-be79-4f66-8dbe-bec862d7d47a-1640663715247-60abf8538ec1bb141be4be6e1f1aad8f.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/02acad73-0309-4f76-b27e-53467d0104b2-1640664154947-069b0d2c45a6f2a361344bc900aea049.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/0d3a6d24-d647-4fc1-9a38-7c999e578a76-1640663715305-ebc35e8365762d8dcc47cf80cf9eb112.jpg",
            star : 5,
            rating : 4.7 ,
            location : "Kebayoran Baru, Jakarta Selatan",
            service : ["Free Cancellation" ,"Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "Restaurant" , "Spa" ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" , "Luggage Storage"],
            price : 4.427197
        },

        {
            id : uuidv4(),
            name : 'Mandarin Oriental Jakarta',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/04/04/0c15ddd5-be92-4d9b-8c4a-3dd49caa64f8-1617544842658-7ff47fff98999839ea7553e209e3c6d6.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/06/28/4c68d6ec-3454-4543-8b4c-11191c9e5bf8-1656417711185-42378b6904f9a392be52e1ab56592659.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/07/27/5c7547be-d2c5-4b67-92f5-17a24f22e163-1658897714542-4db0ea82cad86c7f9272a0f14dab4be6.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/07/27/0f768d9f-374f-4e87-a1bc-1c688f2dfb62-1658898069444-547b221ac3ba05ae4bff4fdd51d39c11.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/06/28/e4f9fe9e-5da4-4abd-a8d7-d52754c76181-1656417703378-b40b13d1ab82a7beb8526bf5f4419a35.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/06/28/9bc990a5-5db4-4c8f-ba0f-025174b1df03-1656417701156-06b64ce4f459b306b5caff752d7a277a.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/07/13/1186fd51-da36-4284-b50b-3ec2f39afae2-1657674713018-feac0bbbfaaaf29b2c5156b173b19b88.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/05/28/1f8b4889-34b4-4f16-ab49-f2f8f4210f33-1622175680838-944acee73a8c85a98f4f6484da274756.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/04/04/0c15ddd5-be92-4d9b-8c4a-3dd49caa64f8-1617544842658-7ff47fff98999839ea7553e209e3c6d6.jpg",
            star : 5,
            rating : 4.7 ,
            location : "Menteng, Central jakarta",
            service : ["Free Cancellation" ,"Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "24-hour Front Desk","Restaurant"  ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" , "Meeting Facilities"],
            price : 6.993801
        },
        {
            id : uuidv4(),
            name : 'Hotel Indonesia Kempinski Jakarta',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/da546e5d-9613-4dcc-941b-2459f2adf29b-1603915369745-f4afd97a7164f561cf9765daa54458f6.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/285e0fbc-0bc2-44ab-ac14-ff3aeadf7a00-1603915525171-a167d2d3165096b0967c51d39b4c3d92.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/a1876a70-8e58-49b3-af97-ca3290c2dfe9-1603915447553-1f8d2b1e0eb80f7559d352b277aaad82.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/2c06baed-0b72-4815-888a-808ba0118796-1603915411997-5635da12cfaeb2f82a73d3ee71974ed3.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/08/043024c4-321c-4c2f-8dc9-241fc72a748b-1615195510854-c59ec78031fb647fe04f4d61b31714d0.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/08/7c678401-3209-4946-b8a1-6dc82dddaed4-1615200312833-dee5d5fc4436c09fc600d530ec9fdcb2.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/11/ac029cbb-be55-42f8-a104-d8c0a4daa241-1615452319237-05f8503e53c8de3ee1476ca3af9c4a20.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/549efa29-8888-4a2b-8aaa-f8b702eeed83-1603915446181-9604fe3e999a163f2cf644140f23c5fb.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/da546e5d-9613-4dcc-941b-2459f2adf29b-1603915369745-f4afd97a7164f561cf9765daa54458f6.jpg",
            star : 5,
            rating : 4.6 ,
            location : "Menteng, Central jakarta",
            service : ["Free Cancellation" ,"Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "Restaurant" ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" ],
            price : 3.239775
        },
        {
            id : uuidv4(),
            name : 'Park Hyatt Jakarta',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/10a6e854-04a9-4618-8a11-ffeba1b845c0-1663198046305-9209f9734dc9ab56a2b9b9c0c8fc6b50.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/01/9ea792ff-1c78-4691-81e9-190d34b182f3-1662032419854-7e3c6eeb6df5a3c97a0380a8e03634b5.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/1d20adcc-abe6-45b7-903f-4dce7de4b515-1663198047066-ea30e960534bbd6c52d86e9139d83326.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/fdc370e0-bba6-4c94-9d56-b593a7929964-1663198046945-a440f0e2668297fc241e7ae1f994c269.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/ae890213-10e4-4382-85e8-d3c1760a7193-1663198047139-1b3c1b434b7f3eb8f9cfef253093d6ac.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/b30cbca7-3635-48b8-b88c-fd5282639fac-1663198046738-110a35e7fb675e2f4ba4714f778fc39a.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/f6a3a073-18ce-4079-a360-580fb178710d-1663198046611-26925a784592abb2bc52f04c1454cee0.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/0723d0f0-492b-4cc4-b910-18ae52b9d471-1663198046196-b5f151f61486971415aa5f1c49b25f91.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/09/15/10a6e854-04a9-4618-8a11-ffeba1b845c0-1663198046305-9209f9734dc9ab56a2b9b9c0c8fc6b50.jpg",
            star : 5,
            rating : 4.6 ,
            location : "Menteng, Central jakarta",
            service : ["Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "Restaurant"  ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" ],
            price : 4.010121
        },
        {
            id : uuidv4(),
            name : 'Fairmont Jakarta',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/2b79bbb5-1bce-43d1-98f0-e6df58d3258a-1603926653826-6ea32c98819338828b10c86444a45c8f.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/cc72e66e-dd91-4f20-8d40-aa1071b8cf0c-1603926653396-c8af85259158e6fee91f8be57dfedd3d.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/c81941ff-a2e8-4edd-88b1-b24f02efc9bd-1615538749300-a6a9bd6ef1a043edef713d0fcdaede35.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/a112ea00-353e-43e2-ae0d-99f0dfa8e16d-1603926682405-5148b33be7a4a147bd162a1356b7fe85.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/e60a03b2-3b02-4375-89c1-a6af3eb1b380-1603926682446-3a871f9fd0697b4e13dd0813e06297e6.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/3f85fd14-14d0-48ad-9234-4c57c7c11f7b-1615538721141-acf80aa5dc4fbe3f24c6024315665d6a.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/d2dec893-7a37-462d-9f03-282f4e758d1b-1615538733501-f279d9145f5e42d952eee504c2c633e9.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/50ec2fee-f6b2-485f-87b2-0278215a9c56-1615538135619-b255eea87d707c5da9d8180341f10141.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/2b79bbb5-1bce-43d1-98f0-e6df58d3258a-1603926653826-6ea32c98819338828b10c86444a45c8f.jpg",
            star : 5,
            rating : 4.6 ,
            location : "Gelora, Central Jakarta",
            service : ["Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "Restaurant" , "Spa" ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" , "Luggage Storage"],
            price : 2.884943
        },
        {
            id : uuidv4(),
            name : 'Oakwood PIK Jakarta',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/06/28/c01ec3dd-3599-4a73-a2b6-0edcaa5032c8-1624853115223-5ad9535414bf143fa275f9f1f28a9419.jpg" ,
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/08/19/cc5c046a-52ed-41c5-b479-b28f52af6356-1629346494494-3f67493ccf8f9c41187622cf1c79ba6e.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/08/19/9cd19267-f3e9-480e-9bc5-a279fe8530f8-1629347119949-4280458da24a76276f10ee147bf453fc.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/08/19/f8fc7e18-a1ae-45a6-9f56-f7017cf93001-1629347119924-58f7388002aee986121bf7741845051f.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/08/19/69ed4943-c314-4f6e-9983-667776c62a0d-1629347119939-7550109c4087b1e10def0b04618dea58.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/08/19/83327cb1-b822-4feb-be14-5cc9cccba565-1629348106773-b47bf77389cebcdcd49d484658f6be64.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/07/08/76bb301a-9222-45f7-a234-760468bf206b-1657226155339-5bc3282c9b43bb000a6c40146b2b3fee.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/08/19/9c78ac6c-95c3-4e45-9138-d714b98ebc9e-1629347358939-9e1c4dc2641b94349ded66d6d8ec41a6.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/06/28/c01ec3dd-3599-4a73-a2b6-0edcaa5032c8-1624853115223-5ad9535414bf143fa275f9f1f28a9419.jpg",
            star : 5,
            rating : 4.0 ,
            location : "Penjaringan, North Jakarta",
            service : ["Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "Restaurant" , "Spa" ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" , "Luggage Storage"],
            price : 1.380001
        },
        {
            id : uuidv4(),
            name : 'Pullman Jakarta Central Park',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/11/14/dcf0811d-d133-48b7-9e4e-db60bab2cd45-1605342786179-78e2b0f2b0ea077276fcb31109d62f40.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/02/10e1f8a8-4dc7-446f-95a1-92be996abc40-1625198719892-e25f9e095691af85d1f9b84561260ccc.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/02/c48fd73d-5d87-46bf-a7ed-e28cafee7a85-1625198719907-6f81cd7f59164c91c7a144f04b6577d6.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/11/14/55487305-350b-40a7-968e-bcea892be2cc-1605342772262-51f9fc375d38ee1d7d9ae9045a3ad2cc.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/02/e1833582-00dc-43f4-a7df-9f4fdec72411-1625198719894-3fecaad24da082adf9df73534254cccc.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/02/f7a8d1a7-2cb2-411b-9c7e-154666839fa9-1625198719882-9153615002e273f0280abf36bb959730.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/02/9e14dbaf-87cf-4d89-9dea-16f65f3655ce-1625198719912-e5a73426797890f5c3d76a03b8fef292.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/02/0f7756dd-b0da-4d48-9b8e-8de271b6acaf-1625198720568-fed9e1f7ff60eaa36bac2b45c63cb318.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/11/14/dcf0811d-d133-48b7-9e4e-db60bab2cd45-1605342786179-78e2b0f2b0ea077276fcb31109d62f40.jpg",
            star : 5,
            rating : 4.1 ,
            location : "Grogol Petamburan, West Jakarta",
            service : ["Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "Restaurant" , "Spa" ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" , "Luggage Storage"],
            price : 1.629203
        },
        {
            id : uuidv4(),
            name : 'Raffles Jakarta',
            // img : [
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/57bacc72-259a-43d9-9a7f-8cb31d3df666-1604150555927-e3938746fc886196e063ab4a40252d15.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/7e8725f0-b029-4520-8bf6-9c57c10da5f2-1604150616048-5a757b54faf8481a90df6c059d2d54e5.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/6491b29b-b52b-48a8-8277-665d8321216d-1604150556011-2d33aaea2abb1729632ccea1ecd89d8e.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/07f02025-9dc5-4366-8d63-ca818c8fbd14-1604150557810-2f01a2e2b169e0994caed5b95d15cb79.jpg" , 
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/d955ac0d-214e-4d34-a3e9-1e0b3faf0507-1604150616080-fce858f2ca7beefc503ba38c4132ad83.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/733cc87f-d7f3-47e8-b001-3b5457b07169-1615552528940-e9fb326ac6d5116bb3ce75c0831f2b6c.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/ffcfd8e9-ff20-44fb-99e0-e26e17de3c9b-1615555518605-d912f87a7434f1ed1d1857bea5f9b9a4.jpg",
            //         "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/10/18/de92b8b9-3db2-458b-ba7e-d4428a284ed0-1634513707804-a1403f9f5dff5939b6900137d56217c1.jpg"
            //     ],
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/57bacc72-259a-43d9-9a7f-8cb31d3df666-1604150555927-e3938746fc886196e063ab4a40252d15.jpg",
            star : 5,
            rating : 4.8 ,
            location : "Setiabudi, South Jakarta",
            service : ["Free Breakfast" , "Free Wifi"],
            facility : ["Swimming Pool" , "WiFi" , "parking area" , "Restaurant" , "Spa" ,"Lift" , "AC" , "Fitness Center" ,"Airport Transfer" , "Vaccination" , "Luggage Storage"],
            price : 4.864202
        },
    ]

    const navigate = useNavigate();

    const handleToHotel = () => {
        navigate("/stays/search/hotels")
    };

      
    return(
        <div onClick={handleToHotel}>
        {cardRoomData.map((obj , idx) => {
            return(
                <div className="card-room-container" key={idx}>
                    <div className="card-room-img-container">
                        <img src={obj.img} alt={obj.name}/>
                    </div>
                    <div className='card-room-main-container'>
                        <h2>{obj.name}</h2>
                        <div className='card-room-place-container'>
                            <div className='card-room-stars-container'>
                                <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                                <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                                <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                                <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                                <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                                {/* <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStarHalf} />   */}
                            </div>
                            <ul>
                                <li>{obj.location}</li>
                            </ul>
                        </div>
                        <div className='card-room-rating-container'>
                            <div className='card-room-rating-box'>
                                <p>{obj.rating}</p>
                            </div>
                            <p>{obj.rating > 4.5 ? "Fantastic" : "Good"}</p>
                        </div>
                        <div className='card-room-service-container'>
                            <div className='card-room-service-box'>
                                <FontAwesomeIcon className='card-service-rooms-icon' icon={faCalendarDays} />  
                                <p>Free Cancellation</p>
                            </div>
                            <div className='card-room-service-box'>
                                <FontAwesomeIcon className='card-service-rooms-icon' icon={faBowlFood} />  
                                <p>Free Breakfast</p>
                            </div>
                            <div className='card-room-service-box'>
                                <FontAwesomeIcon className='card-service-icon' icon={faWifi} />  
                                <p>Free WIFI</p>
                            </div>
                        </div>
                        <div className='card-room-facility-container'>
                            <FontAwesomeIcon className='card-facility-rooms-icon' icon={faSwimmer} />  
                            <FontAwesomeIcon className='card-facility-rooms-icon' icon={faWifi} />  
                            {/* <FontAwesomeIcon className='card-facility-rooms-icon' icon={faRestaurant} />   */}
                            <FontAwesomeIcon className='card-facility-rooms-icon' icon={faParking} />  
                            <FontAwesomeIcon className='card-facility-rooms-icon' icon={faBowlFood} />  
                            <FontAwesomeIcon className='card-facility-rooms-icon' icon={faDoorClosed} />  
                            <FontAwesomeIcon className='card-facility-rooms-icon' icon={faAirFreshener} />     
                            <FontAwesomeIcon className='card-facility-rooms-icon' icon={faBellConcierge} />     
                        </div>
                        </div>
                        <div className="card-room-price-section">
                                <div className='card-room-price-container'>
                                    <div className='card-room-price-box'>
                                        <p>IDR</p>
                                        <h2>{obj.price}</h2>
                                    </div>
                                <p>per room per night</p>
                            </div>
                        </div>
               </div> 
            )
        })}
        </div>
    )
}