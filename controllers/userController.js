const User = require('../models/users');

//create a product
exports.createUser = async (req, res) => {
    try {

        //check if all required fields are provided
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.gender || !req.body.phone || !req.body.role) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const { name, email, password, gender, phone, role } = req.body;  

        const user = new User({name, email, password, gender, phone, role});    

        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }       
};

//update a product
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params; //where id is the product id to be updated
        const { name, email, password, gender, phone, role } = req.body;

        const user = await User.findByIdAndUpdate(id, { name, email, password, gender, phone, role }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }   

        res.status(200).json({ message: 'User updated successfully', user});
    }   
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }

};