import app from "../../../app"
import request from "supertest"

describe('List All Users', () => {

    
     test('GET - Must be able to list users', async () => {
          const response = await request(app).get("/users")
          
          expect(response.body).toHaveProperty("map")
          expect(response.status).toBe(200)
          
     })
})