const RECIPES = [{
        id: "r1",
        title: "Quinoa & Chickpea Salad",
        category: "Vegan",
        img: "assets/images/quinoa.jpg",
        desc: "A filling protein-rich salad with lemon dressing.",
        ingredients: ["1 cup quinoa", "1 can chickpeas", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon", "Salt", "Pepper"],
        steps: ["Cook quinoa as package says", "Mix chickpeas and chopped veg", "Add cooked quinoa and dress", "Serve chilled"],
        nutrition: { calories: 420, carbs: 56, protein: 14, fat: 12 }
    },
    {
        id: "r2",
        title: "Grilled Chicken Bowl",
        category: "Protein",
        img: "assets/images/chicken.jpg",
        desc: "Lean grilled chicken with brown rice and veg.",
        ingredients: ["150g chicken breast", "1/2 cup brown rice", "Broccoli", "Soy sauce", "Garlic"],
        steps: ["Marinate chicken", "Grill until cooked", "Cook rice", "Assemble bowl"],
        nutrition: { calories: 550, carbs: 48, protein: 42, fat: 14 }
    },
    {
        id: "r3",
        title: "Sweet Potato & Black Bean Tacos",
        category: "Vegan",
        img: "assets/images/tacos.jpg",
        desc: "Easy and delicious plant-based tacos with a hearty filling.",
        ingredients: ["1 medium sweet potato", "1 can black beans", "Corn tortillas", "Avocado", "Lime", "Cilantro", "Salt", "Pepper"],
        steps: ["Roast diced sweet potato", "Heat black beans", "Assemble tacos with roasted sweet potato and beans", "Top with avocado, lime, and cilantro"],
        nutrition: { calories: 350, carbs: 60, protein: 12, fat: 10 }
    },
    {
        id: "r4",
        title: "Salmon & Asparagus Bake",
        category: "Protein",
        img: "assets/images/salmon.jpg",
        desc: "A simple oven-baked dish with lean protein and healthy fats.",
        ingredients: ["1 fillet of salmon", "1 bunch asparagus", "Olive oil", "Lemon", "Garlic", "Salt", "Pepper"],
        steps: ["Preheat oven to 400°F", "Place salmon on baking sheet", "Toss asparagus with olive oil, garlic, salt, and pepper", "Bake for 15-20 minutes"],
        nutrition: { calories: 450, carbs: 15, protein: 40, fat: 22 }
    },
    {
        id: "r5",
        title: "Greek Yogurt Parfait",
        category: "Breakfast",
        img: "assets/images/yogurt.jpg",
        desc: "A high-protein, low-sugar breakfast with fresh fruit.",
        ingredients: ["1 cup Greek yogurt", "1/2 cup mixed berries", "1 tbsp honey", "1 tbsp chia seeds", "Granola (optional)"],
        steps: ["Layer Greek yogurt, berries, and honey in a glass", "Top with chia seeds and granola if desired"],
        nutrition: { calories: 280, carbs: 30, protein: 20, fat: 10 }
    },
    {
        id: "r6",
        title: "Egg White Veggie Scramble",
        category: "Protein",
        img: "assets/images/eggscramble.jpg",
        desc: "A protein-packed breakfast with lots of veggies.",
        ingredients: ["4 egg whites", "Spinach", "Mushrooms", "Tomato", "Olive oil", "Salt", "Pepper"],
        steps: ["Sauté veggies in olive oil", "Whisk egg whites, add to pan", "Scramble until eggs are cooked through", "Season with salt and pepper"],
        nutrition: { calories: 200, carbs: 10, protein: 28, fat: 8 }
    },
    {
        id: "r7",
        title: "Turkey & Avocado Lettuce Wraps",
        category: "Low-Carb",
        img: "assets/images/turkeywraps.jpg",
        desc: "Light yet filling wraps made with lean turkey and fresh avocado.",
        ingredients: ["150g lean ground turkey", "4 large lettuce leaves", "1 avocado", "Tomato", "Cilantro", "Lime", "Salt", "Pepper"],
        steps: ["Cook turkey with seasoning", "Mash avocado with lime juice", "Assemble wraps with turkey, avocado, and tomato", "Garnish with cilantro"],
        nutrition: { calories: 350, carbs: 10, protein: 32, fat: 20 }
    },
    {
        id: "r8",
        title: "Chia Pudding with Almond Butter",
        category: "Snack",
        img: "assets/images/chiapudding.jpg",
        desc: "A satisfying, nutrient-dense snack or breakfast option.",
        ingredients: ["2 tbsp chia seeds", "1 cup almond milk", "1 tbsp almond butter", "1 tsp maple syrup", "Cinnamon (optional)"],
        steps: ["Mix chia seeds, almond milk, and maple syrup", "Let sit in fridge for 4 hours or overnight", "Top with almond butter and a sprinkle of cinnamon"],
        nutrition: { calories: 280, carbs: 16, protein: 8, fat: 20 }
    }
];