/**
 * Notifications
 */

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(self.clients.matchAll().then((clients) => {
    if (clients.length) { // check if at least one tab is already open
      clients[0].focus()
    } else {
      self.clients.openWindow(`/${event.notification.data.type ?? ''}`)
    }
  }))
})
