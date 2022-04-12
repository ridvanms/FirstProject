# FirstProjects
writing basic functions (USD to BGN, vakation book list, radians to Degrees ,Deposit Calculator, Food Delivery )     
require 'rugged'
require 'linguist'

repo = Rugged::Repository.new('.')
project = Linguist::Repository.new(repo, repo.head.target_id)
project.language       #=> "Ruby"
project.languages      #=> { "Ruby" => 119387 }
