const { gallery } = {
  gallery: document.querySelector('.gallery'),
};

export default function({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  const card = document.createElement('div');
  card.classList.add('card');


  const galleryLink = document.createElement('a');
  galleryLink.classList.add('galleryLink');
  galleryLink.href = largeImageURL;

  const image = document.createElement('img');
  image.classList.add('image');
  image.setAttribute('src', webformatURL);
  image.setAttribute('alt', tags);

  const info = document.createElement('div');
  info.classList.add('info');

  const infoItemLikesBox = document.createElement('div');
  const infoItemLikes = document.createElement('p');
  infoItemLikes.innerText = `Likes`;
  const infoItemLikesTotal = document.createElement('p');
  infoItemLikesTotal.innerText = `${likes}`;
  infoItemLikesBox.append(infoItemLikes);
  infoItemLikesBox.append(infoItemLikesTotal);

  const infoItemViewsBox = document.createElement('div');
  const infoItemViews = document.createElement('p');
  infoItemViews.innerText = `Views`;
  const infoItemViewsTotal = document.createElement('p');
  infoItemViewsTotal.innerText = `${views}`;
  infoItemViewsBox.append(infoItemViews);
  infoItemViewsBox.append(infoItemViewsTotal);

  const infoItemCommentsBox = document.createElement('div');
  const infoItemComments = document.createElement('p');
  infoItemComments.innerText = `Comments`;
  const infoItemCommentsTotal = document.createElement('p');
  infoItemCommentsTotal.innerText = `${comments}`;
  infoItemCommentsBox.append(infoItemComments);
  infoItemCommentsBox.append(infoItemCommentsTotal);


  const infoItemDownloadsBox = document.createElement('div');
  const infoItemDownloads = document.createElement('p');
  infoItemDownloads.innerText = `Downloads`;
  const infoItemDownloadsTotal = document.createElement('p');
  infoItemDownloadsTotal.innerText = ` ${downloads}`;
  infoItemDownloadsBox.append(infoItemDownloads);
  infoItemDownloadsBox.append(infoItemDownloadsTotal);

  galleryLink.append(image);
  card.append(galleryLink);
  info.append(infoItemLikesBox);
  info.append(infoItemViewsBox);
  info.append(infoItemCommentsBox);
  info.append(infoItemDownloadsBox);
  card.append(info);
  gallery.append(card);

}