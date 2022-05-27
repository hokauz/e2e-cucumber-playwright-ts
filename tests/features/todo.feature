Feature: HomePage

  Scenario: Enter
    Given usuário entrando no site pela página home
    When quando a página carregar
    Then deve existir um título 
    Then o título deve ser "seu comparador de fundos de investimento de todo o mercado"