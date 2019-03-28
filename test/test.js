const ToDo = require('../models/todo')
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();



describe('Todo model', ()=>{
    it('should be an instance of ToDo', async()=>{
        const aToDo = await ToDo.getToDoById(1);
        aToDo.should.be.an.instanceOf(ToDo)
    })

    it('can be marked as done',async()=>{
        const aToDo = await ToDo.getToDoById(1);
        aToDo.status = 'done',
        expect(aToDo.status).to.equal('done')
    })
    it('can be marke as pending',async()=>{
        const aToDo = await ToDo.getToDoById(2);
        aToDo.status = 'pending',
        expect(aToDo.status).to.equal('pending')

    })

})