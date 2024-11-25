import express from "express";


const router = express.Router()

import sign_up from "../controllers/userController.js";


router.post('/sign_up',sign_up)
router.post('/sign_in',)
// router.put('/products/:id',updateProduct);
// router.post('/products',createProduct);
// router.delete('/products/:id',deleteProduct);

export default router;