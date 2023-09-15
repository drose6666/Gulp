/**
 * Очищение папки src/optimized при каждом обновлении изображений
 */
import del from "del";

export const cleanImages = () => {
   return del(app.path.src.imagesOptimizedDist);
}