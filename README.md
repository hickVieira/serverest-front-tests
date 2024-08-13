## testing serverest front
This project tests the [ServeRest Front](https://front.serverest.dev/).

### quickrun
```bash
mkdir serverest_front_tests &&
cd ./serverest_front_tests &&
git clone https://github.com/hickVieira/serverest-front-tests.git ./ &&
npm i &&
npm run test &&
cd ..
```

### tech
- Typescript
- Playwright
- Cucumber

### coverage
- Auth
    - [x] valid register
    - [ ] invalid register
        - [ ] email collision
        - [ ] email format
        - [ ] password format
    - [x] valid login
    - [ ] invalid login 
        - [ ] inexistant email
        - [ ] wrong password
- ...