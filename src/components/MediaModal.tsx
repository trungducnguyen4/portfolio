import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: {
    type: 'video' | 'image';
    url: string;
    title: string;
  } | null;
}

export const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, media }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !media) return null;

  // Format YouTube or Facebook URL to embed if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('facebook.com') || url.includes('fb.watch')) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&t=0`;
    }
    return url;
  };

  const isFacebook = media.url.includes('facebook.com') || media.url.includes('fb.watch');
  const isEmbeddable = media.url.includes('youtube.com') || media.url.includes('youtu.be') || media.url.includes('loom.com') || isFacebook;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-6xl xl:max-w-7xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[96vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-4">
            {media.type === 'video' ? (
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 fill-red-600" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0">
                <ImageIcon className="w-4 h-4" />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-base font-bold text-slate-900 truncate">{media.title}</h3>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'Direct high-resolution media preview' : 'Xem trực tiếp nội dung minh họa chi tiết'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={media.url}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-red-600 rounded-lg hover:bg-slate-100 transition-colors"
              title={language === 'en' ? 'Open original in new tab' : 'Mở ảnh gốc trong tab mới'}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              title={language === 'en' ? 'Close (Esc)' : 'Đóng (Esc)'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Container (Dark background for maximum image/video visibility) */}
        <div className="p-2 sm:p-4 flex-1 overflow-auto flex flex-col items-center justify-center bg-slate-950 min-h-[400px]">
          {media.type === 'video' ? (
            isEmbeddable ? (
              <div className="flex flex-col items-center w-full">
                <div className={`w-full ${isFacebook ? 'max-w-[420px] aspect-[9/16]' : 'max-w-5xl aspect-video'} rounded-xl overflow-hidden shadow-lg border border-slate-800 bg-black flex items-center justify-center`}>
                  <iframe
                    src={getEmbedUrl(media.url)}
                    title={media.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {isFacebook && (
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={media.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {language === 'en' ? 'Watch on Facebook Reels' : 'Mở xem trực tiếp trên Facebook Reels'}
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-800 flex flex-col items-center justify-center bg-slate-900 p-8 text-center">
                <Play className="w-12 h-12 text-red-500 mb-3" />
                <p className="text-slate-300 font-medium mb-3">
                  {language === 'en' ? 'External video link' : 'Đường dẫn video ngoài'}
                </p>
                <a
                  href={media.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold text-xs inline-flex items-center gap-2 hover:bg-red-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {language === 'en' ? `Watch video on ${new URL(media.url).hostname}` : `Mở xem video tại ${new URL(media.url).hostname}`}
                </a>
              </div>
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center p-1 sm:p-2">
              <img
                src={media.url}
                alt={media.title}
                className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-slate-800/80"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>
            {language === 'en'
              ? 'Tip: You can customize media links anytime via the "Customize Data" button'
              : 'Gợi ý: Bạn có thể cập nhật link video YouTube hoặc ảnh bất cứ lúc nào qua nút "Tùy chỉnh Dữ liệu"'}
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold transition-colors"
          >
            {language === 'en' ? 'Close' : 'Đóng'}
          </button>
        </div>
      </div>
    </div>
  );
};
