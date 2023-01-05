import app from "../../../app"
import request from "supertest"



const mockedUser = {
     email: "thiago@mail.com",
     name: "Thiago",
     password:"12345"
}


describe('Created User', () => {

   
   
     test('POST - Must be able to create a user', async () => {
          const response = await request(app).post("/users").send(mockedUser)
          
          expect(response.body).toHaveProperty("name")
          expect(response.body).toHaveProperty("email")
          expect(response.body).toHaveProperty("password")
          expect(response.body.name).toEqual(mockedUser.name)
          expect(response.body.email).toEqual(mockedUser.email)
          expect(response.body.password).toEqual(mockedUser.password)
          expect(response.status).toBe(201)
          
     })

     test('POST - User already exists', async () => {
          const response = await request(app).post("/users").send(mockedUser)
          
          expect(response.body).toHaveProperty("message")
          expect(response.status).toBe(404)
          
     })
})