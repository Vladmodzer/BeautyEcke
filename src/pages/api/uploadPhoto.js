import cloudinary from 'cloudinary';

// Настройка Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function uploadPhoto(req, res) {
  if (req.method === 'POST') {
    try {
      const { file, photoId } = req.body; // Получаем файл и уникальный ID фото

      if (!file || !photoId) {
        return res.status(400).json({ error: "File or photoId is missing" });
      }

      // Загрузка изображения с указанием public_id (для замены старого фото)
      const uploadResponse = await cloudinary.v2.uploader.upload(file, {
        folder: "beauty_ecke", // Папка для хранения
        public_id: photoId,   // Уникальный ID (например, "photo1", "photo2")
        overwrite: true,      // Указывает Cloudinary заменять старое изображение
      });

      // Возврат ссылки на загруженное изображение
      res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      res.status(500).json({ error: "Failed to upload image" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
