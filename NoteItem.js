class NoteItem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    set note(note) {
      this._note = note;
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .note-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: transform 0.2s;
            background: white;
          }
          
          .note-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          
          .note-title {
            font-size: 18px;
            margin-bottom: 8px;
            word-break: break-word;
          }
          
          .note-body {
            color: #666;
            margin-bottom: 12px;
            word-break: break-word;
          }
          
          .note-actions {
            display: flex;
            gap: 8px;
            margin-top: 12px;
          }
          
          button {
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: opacity 0.2s;
          }
          
          button:hover {
            opacity: 0.9;
          }
          
          .archive-btn {
            background-color: #ffc107;
            color: #000;
          }
          
          .delete-btn {
            background-color: #dc3545;
            color: #fff;
          }
        </style>
        <div class="note-card">
          <div class="note-title">${this._note.title}</div>
          ${this._note.body ? `<div class="note-body">${this._note.body}</div>` : ''}
          <div class="note-actions">
            <button class="archive-btn">
              ${this._note.archived ? 'Unarchive' : 'Archive'}
            </button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      `;
  
      this.shadowRoot.querySelector('.archive-btn').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('archiveNote', { 
          detail: this._note.id,
          bubbles: true,
          composed: true
        }));
      });
  
      this.shadowRoot.querySelector('.delete-btn').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('deleteNote', { 
          detail: this._note.id,
          bubbles: true,
          composed: true
        }));
      });
    }
  }
  
  customElements.define('note-item', NoteItem);