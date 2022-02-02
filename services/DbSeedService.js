var QuestionModel = require('../models/QuestionModel');
var TopicModel = require('../models/TopicModel');

module.exports.seedDb = async (v) => {

    // seed topics
    var Physics = await TopicModel.findOne({
        name: 'Physics'
    });
    if (!Physics) {
        Physics = await TopicModel.create({
            name: 'Physics'
        })
    }
    var ModernPhysics = await TopicModel.findOne({
        name: 'Modern Physics'
    });
    if (!ModernPhysics) {
        ModernPhysics = await TopicModel.create({
            name: 'Modern Physics',
            parentId: Physics._id
        })
    };
    var Electrostatics = await TopicModel.findOne({
        name: 'Electrostatics'
    });
    if (!Electrostatics) {
        Electrostatics = await TopicModel.create({
            name: 'Electrostatics',
            parentId: Physics._id
        })
    }
    var QuantumMechanics = await TopicModel.findOne({
        name: 'Quantum Mechanics'
    });
    if (!QuantumMechanics) {
        QuantumMechanics = await TopicModel.create({
            name: 'Quantum Mechanics',
            parentId: ModernPhysics._id
        })
    }
    var Relativity = await TopicModel.findOne({
        name: 'Relativity'
    });
    if (!Relativity) {
        Relativity = await TopicModel.create({
            name: 'Relativity',
            parentId: ModernPhysics._id
        })
    }
    var Chargeofparticles = await TopicModel.findOne({
        name: 'Charge of particles'
    });
    if (!Chargeofparticles) {
        Chargeofparticles = await TopicModel.create({
            name: 'Charge of particles',
            parentId: Electrostatics._id
        })
    }
    var Waveparticleduality = await TopicModel.findOne({
        name: 'Wave particle duality'
    });
    if (!Waveparticleduality) {
        Waveparticleduality = await TopicModel.create({
            name: 'Wave particle duality',
            parentId: QuantumMechanics._id
        })
    }
    var Heisenbergspriciple = await TopicModel.findOne({
        name: "Heisenberg's priciple"
    });
    if (!Heisenbergspriciple) {
        Heisenbergspriciple = await TopicModel.create({
            name: "Heisenberg's priciple",
            parentId: QuantumMechanics._id
        })
    }
    var Specialtheory = await TopicModel.findOne({
        name: "Special theory"
    });
    if (!Specialtheory) {
        Specialtheory = await TopicModel.create({
            name: "Special theory",
            parentId: Relativity._id
        })
    }
    var Generaltheory = await TopicModel.findOne({
        name: "General theory"
    });
    if (!Generaltheory) {
        Generaltheory = await TopicModel.create({
            name: "General theory",
            parentId: Relativity._id
        })
    }
    var Electroncharge = await TopicModel.findOne({
        name: "Electron charge"
    });
    if (!Electroncharge) {
        Electroncharge = await TopicModel.create({
            name: "Electron charge",
            parentId: Chargeofparticles._id
        })
    }

    //seed questions
    Question1 = await QuestionModel.findOne({
        question: 'Question 1'
    });
    if (!Question1) {
        await QuestionModel.create({
            question: 'Question 1',
            topics: [
                Waveparticleduality._id,
                Heisenbergspriciple._id
            ]
        })
    }
    Question2 = await QuestionModel.findOne({
        question: 'Question 2'
    });
    if (!Question2) {
        await QuestionModel.create({
            question: 'Question 2',
            topics: [
                Electroncharge._id,
                Heisenbergspriciple._id
            ]
        })
    }
    Question3 = await QuestionModel.findOne({
        question: 'Question 3'
    });
    if (!Question3) {
        await QuestionModel.create({
            question: 'Question 3',
            topics: [
                Generaltheory._id,
            ]
        })
    }
    Question4 = await QuestionModel.findOne({
        question: 'Question 4'
    });
    if (!Question4) {
        await QuestionModel.create({
            question: 'Question 4',
            topics: [
                Electroncharge._id,
            ]
        })
    }
};