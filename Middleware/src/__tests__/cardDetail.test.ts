import {getCards , createCard ,deleteCard} from '../controllers/card.controller';

// describe('card',()=>{
//     describe('getCardDetails',()=>{
//         describe('Get card details',()=>{
//             it('Got card Details',async()=>{
//                 const res = await getCards({});
//                 expect(res.status).toBe(200);
//             });
//         });
//     });
// });

describe('card',()=>{
    describe('postCardDetails',()=>{
        describe('New card details',()=>{
            it('New card is created',async()=>{
                const res = await createCard({});
                expect(res.status).toBe(201);
            });
        });
    });
});

describe('card',()=>{
    describe('deleteCardDetails',()=>{
        describe('Delete card details',()=>{
            it('Card is deleted',async()=>{
                const res = await deleteCard({});
                expect(res.status).toBe(200);
            });
        });
    });
});