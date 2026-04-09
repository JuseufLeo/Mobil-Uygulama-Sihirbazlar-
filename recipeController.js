const Recipe = require('../models/Recipe'); // Tarif modelini içeri aktar

/**
 * @route   GET /api/recipes/search
 * @desc    Kullanıcının elindeki malzemelere göre tarif arar
 * @access  Public
 */
exports.searchRecipesByIngredients = async (req, res) => {
    try {
        // 1. Gelen sorguyu (query) al ve kontrol et
        const { malzemeler } = req.query;

        if (!malzemeler) {
            return res.status(400).json({
                success: false,
                message: "Lütfen en az bir malzeme girin. (Örn: ?malzemeler=domates,yumurta)"
            });
        }

        // 2. Virgülle ayrılmış string'i diziye çevir ve boşlukları temizle (Regex ile esnek arama için hazırlık)
        const ingredientArray = malzemeler.split(',').map(item => item.trim().toLowerCase());

        // 3. MongoDB Sorgusu: Gönderilen malzemelerden "herhangi birini ($in)" içeren tarifleri bul
        const recipes = await Recipe.find({
            malzemeler: { 
                $in: ingredientArray.map(ing => new RegExp(ing, 'i')) 
            }
        })
        .select('baslik hazirlanmaSuresi besinDegerleri malzemeler diyetEtiketleri') // Sadece gerekli alanları getir (Performans Optimizasyonu)
        .limit(20); // Çok fazla sonuç dönmesini engelle

        // 4. Sonuç boşsa kullanıcıyı bilgilendir
        if (recipes.length === 0) {
            return res.status(404).json({
                success: true,
                message: "Elinizdeki malzemelere uygun tarif bulunamadı.",
                data: []
            });
        }

        // 5. Başarılı yanıtı JSON olarak döndür
        return res.status(200).json({
            success: true,
            count: recipes.length,
            data: recipes
        });

    } catch (error) {
        // Hata Yönetimi (Error Handling)
        console.error("Tarif arama hatası:", error);
        return res.status(500).json({
            success: false,
            message: "Sunucu hatası oluştu, lütfen daha sonra tekrar deneyin."
        });
    }
};
