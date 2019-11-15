describe("My First Test", function() {
  it("Visits the kitchen sink", function() {
    cy.visit("http://localhost:3000/");
    cy.screenshot();
    cy.viewport(1200, 1000);
    window.localStorage.setItem(
      "id_token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFUSkZOREExTmpreFFrTkZNVEU0UkRoR01VTTNRMFkxUTBVeFJUZzBNVGxDTVRKRE5UYzJRZyJ9.eyJnaXZlbl9uYW1lIjoi7J6s7JiBIiwiZmFtaWx5X25hbWUiOiLqsJUiLCJuaWNrbmFtZSI6Indvb2RlcjIwNTAiLCJuYW1lIjoi6rCV7J6s7JiBIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21DVkQ0R0hGN0UyZUxfTmdvREtFbVZhTWFUQnF3bGo3WHFySlpsdmlBIiwibG9jYWxlIjoia28iLCJ1cGRhdGVkX2F0IjoiMjAxOS0xMS0xNFQwODo0OTozOC4yNjJaIiwiaXNzIjoiaHR0cHM6Ly9qYWV5b3VuZy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTM1MTc4MTYzNjA0MDgwNzI5NDUiLCJhdWQiOiJaeUZmbkZoa1BUQW12ak1Jb1VqdHVKck1ITnFjMTBxbiIsImlhdCI6MTU3MzcyMTM3OCwiZXhwIjoxNTczNzU3Mzc4LCJhdF9oYXNoIjoiVHdhakFEVS1FZ2NQQ205YnFNSFVKQSIsIm5vbmNlIjoiczJ6b3BBZ2oub2xrZ1B1SFEwVV9zWE9iblE4U1lnTDYifQ.t4SaOYd8gQgTg_n2ZZH9NCdccitAWDgDkuULbO4DLz2gpaZjyetcf15nX1QNMRxjOAod26bcxm214-Rgk94U3RD9i9T4Eq21Rn3Q5eS4rUvSmWLidJYFEUpIhDKbGtRhAlLVJj76qTpAJcvJv9Px8-fH4_G5eLSr0vw1qXoBoR4BlsgSbtuwDxN7xsGVgJd3z0UMWLF0YzjbMyjMb_JtiWcRSL4txFu2J_VsV8ZemzEtZP_Yl9JCMmb9NJ6cRc0mYSeFmLffRmWk1lZ822_6O5daALzvMotU1hvm3EIEFGEUvISibaSZHB0g_AcwSxBqUoOxm4IViy7uiJeSD9oo6g"
    );
    cy.get(".hamburg-btn-wrapper").click();
    cy.get(".hamburg-btn-wrapper").click();
    cy.get(".hamburg-btn-wrapper").click();
    cy.get(".hamburg-btn-wrapper").click();
    cy.get(".problem-all-wrapper").scrollTo("bottom", { duration: 1000 });
    cy.get(".hamburg-btn-wrapper").click();
    cy.get(".hamburg-btn-wrapper").click();
    cy.get(".problem-all-wrapper").scrollTo("top", { duration: 1000 });
    cy.get(".problem-all-wrapper").scrollTo("bottom", { duration: 1000 });
    cy.get(".icon-wrapper-problem-mode-inner").click();
    cy.get(".side-problem-wrapper").scrollTo("bottom", {
      duration: 1000
    });
    cy.get(".side-problem-wrapper").scrollTo("top", {
      duration: 1000
    });
    cy.get(".side-problem-level").click();
    cy.get(".notice-about-problem-system-wrapper").click();
    cy.get(".notice-close-btn").click();
    cy.get(".CodeMirror textarea").type("test test test test", { force: true });
    cy.get(".notice-close-btn").click();
    cy.get(".code-btn-execution").click();
    cy.get(".code-btn-result").click();
    cy.get(".problem-result-btn").click();
    cy.get(".notice-close-btn").click();
    cy.get(".header-logo").click();
    cy.get(".icon-wrapper-inner").click();
    cy.get(".mypage-code-scroll").scrollTo("bottom", { duration: 1000 });
    cy.get(".mypage-code-scroll").scrollTo("top", { duration: 1000 });
  });
});
